// Star calculation utility for TMDB vote_average (0-10) to 5-star system

export interface StarRating {
  fullStars: number;
  halfStars: number;
  emptyStars: number;
  percentage: number;
}

/**
 * Calculate star rating from TMDB vote_average (0-10 scale)
 * @param voteAverage - TMDB vote average (0-10)
 * @returns StarRating object with full, half, and empty stars
 */
export function calculateStars(voteAverage: number): StarRating {
  // Convert 10-point scale to 5-point scale
  const rating = (voteAverage / 10) * 5;

  // Calculate full stars (whole numbers)
  const fullStars = Math.floor(rating);

  // Calculate if there's a half star (decimal >= 0.25 and < 0.75)
  const decimal = rating - fullStars;
  const halfStars = (decimal >= 0.25 && decimal < 0.75) ? 1 : 0;

  // If decimal >= 0.75, round up to next full star
  const adjustedFullStars = decimal >= 0.75 ? fullStars + 1 : fullStars;

  // Calculate empty stars
  const emptyStars = 5 - adjustedFullStars - halfStars;

  // Calculate percentage for progress bars if needed
  const percentage = (rating / 5) * 100;

  return {
    fullStars: adjustedFullStars,
    halfStars,
    emptyStars,
    percentage: Math.round(percentage)
  };
}

/**
 * Get star array for *ngFor loops
 * @param voteAverage - TMDB vote average (0-10)
 * @returns Array of star types: 'full', 'half', 'empty'
 */
export function getStarArray(voteAverage: number): string[] {
  const stars = calculateStars(voteAverage);
  const starArray: string[] = [];

  // Add full stars
  for (let i = 0; i < stars.fullStars; i++) {
    starArray.push('full');
  }

  // Add half star
  for (let i = 0; i < stars.halfStars; i++) {
    starArray.push('half');
  }

  // Add empty stars
  for (let i = 0; i < stars.emptyStars; i++) {
    starArray.push('empty');
  }

  return starArray;
}

/**
 * Get star rating text description
 * @param voteAverage - TMDB vote average (0-10)
 * @returns String description of rating
 */
export function getStarRatingText(voteAverage: number): string {
  const rating = (voteAverage / 10) * 5;

  if (rating >= 4.5) return 'Excellent';
  if (rating >= 4.0) return 'Very Good';
  if (rating >= 3.5) return 'Good';
  if (rating >= 3.0) return 'Average';
  if (rating >= 2.0) return 'Below Average';
  return 'Poor';
}

// Example usage and testing
// console.log('🌟 Star Rating Calculator Examples:');
// console.log('=====================================');

const testRatings = [8.2, 7.5, 6.8, 5.5, 4.2, 9.1, 3.7];

testRatings.forEach(rating => {
  const stars = calculateStars(rating);
  const starArray = getStarArray(rating);
  const description = getStarRatingText(rating);

  // console.log(`\nTMDB Rating: ${rating}/10`);
  // console.log(`5-Star Rating: ${stars.fullStars + (stars.halfStars * 0.5)}/5`);
  // console.log(`Stars: ${stars.fullStars} full, ${stars.halfStars} half, ${stars.emptyStars} empty`);
  // console.log(`Array: [${starArray.join(', ')}]`);
  // console.log(`Description: ${description}`);
  // console.log(`Percentage: ${stars.percentage}%`);
});
