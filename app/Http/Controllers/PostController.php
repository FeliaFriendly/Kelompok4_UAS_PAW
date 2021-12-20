<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->orderBy('updated_at', 'desc')->get();
 
        return response()->json([
            'success' => true,
            'data' => $posts
        ]);
    }
 
    public function show($id)
    {
        $post = Post::with('user')->find($id);
 
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $post->toArray()
        ], 200);
    }
 
    public function store(Request $request)
    {

        $file = $request->file('photo');
        $fileName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();;
 
        $file->move(public_path('images/'), $fileName);

        $post = Post::create([
            'photo' => 'images/'.$fileName,
            'caption' => $request->caption,
            'user_id' => auth()->user()->id,
            'likes' => 0
        ]); 
        if ($post)
            return response()->json([
                'success' => true,
                'data' => $post->toArray()
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Post not added'
            ], 500);
    }
 
    public function update(Request $request, $id)
    {
        $file = $request->file('photo');
        $fileName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();;
 
        $file->move(public_path('images/'), $fileName);

        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 400);
        }
        
        $updated = $post->update([
            'photo' => 'images/'.$fileName,
            'caption' => $request->caption,
        ]); 
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Post can not be updated'
            ], 500);
    }
 
    public function destroy($id)
    {
        $post = Post::find($id);
 
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 400);
        }
 
        if ($post->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Post can not be deleted'
            ], 500);
        }
    }

    public function likes(Request $request, $id)
    {
        $post = Post::find($id);
 
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 400);
        }

        $likes = $post->likes;
        $likes = $likes+1;
 
        $updated = $post->update(['likes' => $likes]);
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Post can not be updated'
            ], 500);
    }
}
