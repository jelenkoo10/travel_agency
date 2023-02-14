<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

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
        $offer_strings = [' - Exclusive!', " - Don't miss!", ""];
        $departure_time = $this->faker->dateTimeBetween($startDate = '-1 years', $endDate = '+5 years');
        $formatted_time = $departure_time->format('Y-m-d H:i:s');
        $tmp_time = date('Y-m-d H:i:s', strtotime($formatted_time . ' + 2 days'));
        $arrival_time = $this->faker->dateTimeInInterval($startDate = $tmp_time, $interval = '+ 10 days');
        $num_of_days = $departure_time->diff($arrival_time)->format('%R%a days');

        $full_location = $this->faker->location();
        $divided_location = explode(",", $full_location);

        $monthName = date('F', strtotime($formatted_time));
        $year = date('Y', strtotime($formatted_time));

        $offer_name = $divided_location[0] . ", " . $monthName . " " . $year . $offer_strings[rand(0,2)];
        return [
            'offer_name'        =>  $offer_name,
            'continent'         =>  $divided_location[2],
            'country'           =>  $divided_location[1],
            'city'              =>  $divided_location[0],
            'departure_time'    =>  $departure_time,
            'arrival_time'      =>  $arrival_time,
            'num_of_days'       =>  $num_of_days,
            'transport'         =>  $this->faker->transport(),
            'apartment'         =>  $this->faker->apartment(),
            'apartment_name'    =>  $this->faker->apartmentName(),
            'accomodation'      =>  $this->faker->accomodation(),
            'stars'             =>  $this->faker->numberBetween($min = 1, $max = 5),
            'price'             =>  $this->faker->biasedNumberBetween($min = 100, $max = 3000, $function = 'cos'),
            'has_internet'      =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_tv'            =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_ac'            =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'has_fridge'        =>  $this->faker->boolean($chanceOfGettingTrue = 50),
            'destination_image' =>  "storage/cityPhotos/" . strtolower($divided_location[0]) . ".jpg",
            'available'         =>  Carbon::createFromFormat('Y-m-d H:i:s', $formatted_time)->isPast() ? '0' : '1',
        ];
    }
}
