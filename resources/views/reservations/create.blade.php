@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <section>
            <h1>Unesite detalje rezervacije:</h1>
            <form action='/reservation' method="post">
                @csrf
                <div>
                    <div>
                        <label for="offer_id">ID aranžmana:</label>
                        <input name="offer_id" id="offer_id" value="{{ request()->route('id') }}" readonly />
                    </div>
                    <div>
                        <label for="traveler_name">Ime:</label>
                        <input type="text" name="traveler_name" id="traveler_name" />
                        @error('traveler_name')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="traveler_surname">Prezime:</label>
                        <input type="text" name="traveler_surname" id="traveler_surname" />
                        @error('traveler_surname')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="phone_number">Broj telefona:</label>
                        <input type="text" name="phone_number" id="phone_number" />
                        @error('phone_number')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="email">Email adresa:</label>
                        <input type="email" name="email" id="email" />
                        @error('email')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="payment">Način plaćanja:</label>
                        <select name="payment" id="payment">
                            <option value="credit-card">Kreditna kartica</option>
                            <option value="cash">Keš</option>
                        </select>
                    </div>
                    <div>
                        <label for="num_of_travelers">Broj putnika:</label>
                        <input type="number" name="num_of_travelers" id="num_of_travelers" min="1" />
                        @error('num_of_travelers')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="comment">Dodatne napomene:</label>
                        <textarea name=comment id="comment"></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <button class="submit-btn">Pošalji rezervaciju</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
</div>
@endsection

            