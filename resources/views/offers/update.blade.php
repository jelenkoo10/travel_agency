@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <p class="car-name">{{$offer[0]->city}}, {{$offer[0]->country}}</p>
                <p class="car-name">Departure time: {{$offer[0]->departure_time}}</p>
                <div class="row mb-3">
                <label for="city" class="col-md-4 col-form-label">Grad</label>

                    <input id="city" type="text" class="form-control @error('city') is-invalid @enderror" name="city" value="{{ old('city') ?? $offer[0]->city }}" required autocomplete="city" autofocus>

                    @error('city')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
        </div>
    </div>
</div>
@endsection