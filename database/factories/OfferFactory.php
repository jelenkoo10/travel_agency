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
        return [
            'location'       =>  $this->faker->location(),
            'transport'      =>  $this->faker->transport(),
            'apartment'      =>  $this->faker->apartment(),
            'stars'          =>  $this->faker->numberBetween($min = 1, $max = 5),
            'price'          =>  $this->faker->numberBetween($min = 80, $max = 1500),
            'departure_time' =>  $departure_time,
            'arrival_time'   =>  $this->faker->dateTimeInInterval($startDate = $departure_time, $interval = '+ 5 days'),
            'program'        =>  $this->faker->paragraph($nbSentences = 10),
            'images'         =>  "",
        ];
    }
}
