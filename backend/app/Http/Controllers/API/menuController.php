<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

class menuController extends Controller
{
    public function store(Request $req){
        $menu = new Menu;
        
        $rename_to = input(file('img')->getClientOriginalName());
        $menu->name = $req->input('name');
        $menu->category = $req->input('category');
        $menu->price = $req->input('price');
        $menu->description = $req->input('description');
        $menu->img = $req->$rename_to;

        $menu->save();

        return  response()-> json([
            "status" => 200,
            "mes" => 'item added to the menu table',
        ]);
    }
}
