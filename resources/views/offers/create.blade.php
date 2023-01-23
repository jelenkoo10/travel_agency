@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form action="/offer" enctype="multipart/form-data" method="post">
            @csrf
                <div>
                    <div>
                        <label for="city">City:</label>
                        <input type="text" name="city" id="city" />
                        @error('city')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="country">Country:</label>
                        <input type="text" name="country" id="country" />
                        @error('country')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="continent">Continent:</label>
                        <input type="text" name="continent" id="continent" />
                        @error('continent')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="departure_time">Departure time:</label>
                        <input type="datetime-local" name="departure_time" id="departure_time" />
                        @error('departure_time')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="arrival_time">Arrival time:</label>
                        <input type="datetime-local" name="arrival_time" id="arrival_time" />
                        @error('arrival_time')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="transport">Transport:</label>
                        <select name="transport" id="transport">
                            <option value="bus">Bus</option>
                            <option value="plane">Plane</option>
                            <option value="cruise">Cruise</option>
                            <option value="train">Train</option>
                            <option value="own transport">Own transport</option>
                        </select>
                        @error('transport')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="apartment">Apartment type:</label>
                        <select name="apartment" id="apartment">
                            <option value="hotel">Hotel</option>
                            <option value="bungalow">Bungalow</option>
                        </select>
                        @error('apartment')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="apartment_name">Apartment name:</label>
                        <input type="text" name="apartment_name" id="apartment_name"/>
                        @error('apartment_name')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="accomodation">Accomodation type:</label>
                        <select name="accomodation" id="accomodation">
                            <option value="1_1">1_1</option>
                            <option value="1_2">1_2</option>
                            <option value="1_2_and1">1_2_and1</option>
                            <option value="1_3">1_3</option>
                            <option value="1_3_and1">1_3_and1</option>
                            <option value="1_4">1_4</option>
                        </select>
                        @error('accomodation')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="stars">Stars:</label>
                        <input type="number" id="stars" name="stars" min="1" max="5" />
                        @error('stars')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="price">Price (€):</label>
                        <input type="number" id="price" name="price" min="100" max="3000" />
                        @error('price')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_internet">Internet:</label>
                        <select name="has_internet" id="has_internet">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_internet')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_tv">TV:</label>
                        <select name="has_tv" id="has_tv">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_tv')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_ac">AC:</label>
                        <select name="has_ac" id="has_ac">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_ac')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_fridge">Fridge:</label>
                        <select name="has_fridge" id="has_fridge">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_fridge')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="destination_image" class="col-md-4 col-form-label">Destination image</label>
                        <input type="file" class="form-control-file" id="destination_image" name="destination_image" >
                        @error('destination_image')
                            <strong>{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <div>
                    <div class="col-6">
                        <button class="submit-btn">Store offer</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection