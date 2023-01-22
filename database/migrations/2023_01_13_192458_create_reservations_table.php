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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('offer_id');
            $table->string('traveler_name');
            $table->string('traveler_surname');
            $table->string('phone_number');
            $table->string('email')->unique();
            $table->string('payment');
            $table->integer('num_of_travelers');
            $table->string('comment');
            $table->enum('status', array('0','1'))->default('0');
            $table->timestamps();

            $table->index('offer_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};
