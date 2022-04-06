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
            $booking->itemName = $req->itemName;
            $booking->price = $req->price;
            $booking->quantity = $req->quantity;
            $booking->phone = $req->phone;
            $booking->location = $req->location;

            $booking->save();

            return  response()-> json([
                "message" => 'Order is placed. Please wait for 30 minutes...',
            ]);
        }catch (\Exception $e) {
            return  response()-> json([
                "message" => $e->getMessage(),
            ]);
        }
    }
}
