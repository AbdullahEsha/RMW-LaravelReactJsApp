<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function verify(Request $req){
        $user = User::where('password', $req->password)
                    ->where(function($query) use($req) {
                        $query->where('email', $req->email)
                        ->orWhere('phone', $req->email);
                    })->first();

        if($user){
            $req->session()->put('name', $user->name);
            $req->session()->put('img', $user->img);
            $req->session()->put('type', $user->userType);
            $req->session()->put('id', $user->id);
            
            if($req->session()->get('type') == 'admin'){
                return redirect('/admin');
            }
            else if($req->session()->get('type') == 'user'){
                return redirect('/user');
            }
            else{
                $req->session()->flash('error', 'User type could not be determined');
                return redirect('/login');
            }
        }
        else{
            $req->session()->flash('error', 'Invalid email/phone and/or password');
            return redirect('/login');
        }
    }
}
