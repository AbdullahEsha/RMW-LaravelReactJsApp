<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;

class bookingController extends Controller
{
    public function getData(){
        try{
            $bookingData = Booking::orderBy('id', 'desc')->get();
            return $bookingData;
        }
        catch (\Exception $e) {
            return  response()-> json([
                "message" => $e->getMessage(),
            ]);
        } 
    }

    public function store(Request $req){
        $booking = new Booking;
        try {
            $booking->c_name = $req->c_name;
            $booking->phone = $req->phone;
            $booking->email = $req->email;
            $booking->b_date = $req->b_date;
            $booking->n_person = $req->n_person;

            $booking->save();

            return  response()-> json([
                "message" => 'Booking is placed. Please, wait for the confirmation through email...',
            ]);
        }catch (\Exception $e) {
            return  response()-> json([
                "message" => $e->getMessage(),
            ]);
        }
    }
}
