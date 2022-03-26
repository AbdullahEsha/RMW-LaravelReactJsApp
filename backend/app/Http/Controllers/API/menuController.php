<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

class menuController extends Controller
{
    public function store(Request $req){
        $menu = new Menu;
        
        
        $menu->name = $req->name;
        $menu->category = $req->category;
        $menu->price = $req->price;
        $menu->description = $req->description;
        $menu->img = $req->img;

        $menu->save();

        return  response()-> json([
            "message" => 'Item added to the menu table...',
        ]);
    }
}
