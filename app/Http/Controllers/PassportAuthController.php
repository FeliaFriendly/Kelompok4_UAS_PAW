<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
class PassportAuthController extends Controller
{
    /**
     * Registration
     */
    public function register(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if($user){
            return response()->json(['error' => 'email sudah digunakan'], 400);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        event(new Registered($user));
        $token = $user->createToken('LaravelAuthApp')->accessToken;
 
        return response()->json(['token' => $token], 200);
    }
 
    /**
     * Login
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            if(!auth()->user()->email_verified_at){
                return response()->json(['error' => 'belum terverifikasi'], 403);
            }
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['error' => 'username / password salah'], 401);
        }
    }   

    public function details()
    {
        
        $user = auth()->user();
        return response()->json(['data' => $user], 200);
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        $file = $request->file('photo');
        $fileName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();;
 
        $file->move(public_path('images/'), $fileName);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'photo' => 'images/'.$fileName
        ]);
        return response()->json(['data' => $user], 200);
    }
}