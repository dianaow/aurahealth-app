<script lang="ts">
   import { writable } from 'svelte/store';

   let email = writable('');
   let password = writable('');
   let isNewUser = writable(false);
   let errorMessage = writable('');
 
 </script>
 
 <h1 class="text-4xl font-bold text-center">Aura Fem Health</h1>
 <div class="flex items-center justify-center min-h-screen bg-gray-100">
   <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
     <h1 class="text-2xl font-bold text-center">{ $isNewUser ? 'Create Account' : 'Login' }</h1>
     {#if $errorMessage}
       <p class="text-red-500">{ $errorMessage }</p>
     {/if}
     <form action={ $isNewUser ? "?/signup" : "?/login" } method="POST" class="space-y-4">
       <div>
         <label class="block text-sm font-medium text-gray-700">Email</label>
         <input type="email" name="email" bind:value={$email} class="w-full p-2 border border-gray-300 rounded-md" required />
       </div>
       <div>
         <label class="block text-sm font-medium text-gray-700">Password</label>
         <input type="password" name="password" bind:value={$password} class="w-full p-2 border border-gray-300 rounded-md" required />
       </div>
       <div>
         <button type="submit" class="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
           { $isNewUser ? 'Sign Up' : 'Login' }
         </button>
       </div>
     </form>
     
     <div class="text-center">
       <button on:click={() => isNewUser.set(!$isNewUser)} class="text-blue-500 hover:underline">
         { $isNewUser ? 'Already have an account? Login' : "Don't have an account? Sign Up" }
       </button>
     </div>
   </div>
 </div>
 