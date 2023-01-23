<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $departure_time = $this->faker->dateTimeBetween($startDate = 'now', $endDate = '+5 years');
        $full_location = $this->faker->location();
        $divided_location = explode(",", $full_location);

        $formatted_time = $departure_time->format('Y-m-d H:i:s');
        $monthName = date('F', strtotime($formatted_time));
        $year = date('Y', strtotime($formatted_time));

        $offer_name = $divided_location[0] . ", " . $monthName . " " . $year;
        return [
            'offer_name'     =>  $offer_name,
            'continent'      =>  $divided_location[2],
            'country'        =>  $divided_location[1],
            'city'           =>  $divided_location[0],
            'departure_time' =>  $departure_time,
            'arrival_time'   =>  $this->faker->dateTimeInInterval($startDate = $departure_time, $interval = '+ 10 days'),
            'transport'      =>  $this->faker->transport(),
            'apartment'      =>  $this->faker->apartment(),
            'apartment_name' =>  $this->faker->apartmentName(),
            'accomodation'   =>  $this->faker->accomodation(),
            'stars'          =>  $this->faker->numberBetween($min = 1, $max = 5),
            'price'          =>  $this->faker->biasedNumberBetween($min = 100, $max = 3000, $function = 'cos'),
            'has_internet'   =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_tv'         =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_ac'         =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_fridge'     =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'images'         =>  "",
        ];
    }
}
