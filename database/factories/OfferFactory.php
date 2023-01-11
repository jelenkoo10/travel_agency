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
        return [
            'location'       =>  $this->faker->firstNameMale,
            'transport'      =>  $this->faker->lastName,
            'apartment'      =>  $this->faker->lastName,
            'stars'          =>  $this->faker->lastName,
            'price'          =>  $this->faker->lastName,
            'departure_time' =>  $this->faker->lastName,
            'arrival_time'   =>  $this->faker->lastName,
            'program'        =>  $this->faker->lastName,
            'images'         =>  $this->faker->lastName,
        ];
    }
}
