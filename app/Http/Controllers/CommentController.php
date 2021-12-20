<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
class CommentController extends Controller
{
    public function index()
    {
        $comments = auth()->user()->comments;
 
        return response()->json([
            'success' => true,
            'data' => $comments
        ]);
    }
 
    public function show($id)
    {
        $comments = Comment::with('user')->where('post_id', $id)->get();
 
        if (!$comments) {
            return response()->json([
                'success' => false,
                'message' => 'Comment not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $comments->toArray()
        ], 200);
    }

    public function details($id)
    {
        $comments = Comment::with('user')->find($id);
 
        if (!$comments) {
            return response()->json([
                'success' => false,
                'message' => 'Comment not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $comments->toArray()
        ], 200);
    }
 
    public function store(Request $request)
    {
 
        $comment = Comment::create([
            'user_id' => auth()->user()->id,
            'post_id' => $request->post_id,
            'comment' => $request->comment,
        ]);

 
        if ($comment)
            return response()->json([
                'success' => true,
                'data' => $comment->toArray()
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Comment not added'
            ], 500);
    }
 
    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
 
        if (!$comment) {
            return response()->json([
                'success' => false,
                'message' => 'Comment not found'
            ], 400);
        }

        $updated = $comment->update([
            'comment' => $request->comment
        ]);
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Comment can not be updated'
            ], 500);
    }
 
    public function destroy($id)
    {
        $comment = Comment::find($id);
 
        if (!$comment) {
            return response()->json([
                'success' => false,
                'message' => 'Comment not found'
            ], 400);
        }
 
        if ($comment->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Comment can not be deleted'
            ], 500);
        }
    }
}
