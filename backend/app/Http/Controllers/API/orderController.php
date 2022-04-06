<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class orderController extends Controller
{
    public function getData(){
        try{
            $orderData = Order::orderBy('id', 'desc')->get();
            return $orderData;
        }
        catch (\Exception $e) {
            return  response()-> json([
                "message" => $e->getMessage(),
            ]);
        } 
    }

    public function store(Request $req){
        $order = new Order;
        try { 
            $order->itemName = $req->itemName;
            $order->price = $req->price;
            $order->quantity = $req->quantity;
            $order->phone = $req->phone;
            $order->location = $req->location;

            $order->save();

            return  response()-> json([
                "message" => 'Order is placed. Please, wait for 30 minutes...',
            ]);
        }catch (\Exception $e) {
            return  response()-> json([
                "message" => $e->getMessage(),
            ]);
        }
    }
}
