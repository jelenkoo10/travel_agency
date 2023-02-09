@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <section>
            <h1>Enter details about new STAFF member:</h1>
            <form action='/user' method="post">
                @csrf
                <div>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" />
                        @error('name')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="surname">Surname:</label>
                        <input type="text" name="surname" id="surname" />
                        @error('surname')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="phone_number">Phone number:</label>
                        <input type="text" name="phone_number" id="phone_number" />
                        @error('phone_number')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="email">Email address:</label>
                        <input type="email" name="email" id="email" />
                        @error('email')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" />
                        @error('password')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <button class="submit-btn">Add user</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
</div>
@endsection