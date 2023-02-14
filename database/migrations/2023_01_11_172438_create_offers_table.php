<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('offer_name');
            $table->string('continent');
            $table->string('country');
            $table->string('city');
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->string('num_of_days');
            $table->string('transport');
            $table->string('apartment');
            $table->string('apartment_name');
            $table->string('accomodation');
            $table->integer('stars');
            $table->integer('price');
            $table->string('has_internet');
            $table->string('has_tv');
            $table->string('has_ac');
            $table->string('has_fridge');
            $table->string('destination_image');
            $table->enum('available', array('0','1'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
};
