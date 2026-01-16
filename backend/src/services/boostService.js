const BOOST_FEE_AR = 5000;

export class BoostService {
  constructor(listingRepository, userRepository) {
    this.listingRepository = listingRepository;
    this.userRepository = userRepository;
  }

  async boostListing(listingId, userId) {
    const listing = await this.listingRepository.findById(listingId);
    if (!listing) {
      throw new Error("Listing not found.");
    }

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found.");
    }

    if (user.balanceAr < BOOST_FEE_AR) {
      throw new Error("Insufficient balance.");
    }

    await this.userRepository.update(user.id, {
      balanceAr: user.balanceAr - BOOST_FEE_AR
    });

    const updated = await this.listingRepository.update(listingId, { isBoosted: true });
    if (!updated) {
      throw new Error("Unable to boost listing.");
    }

    return updated;
  }
}
