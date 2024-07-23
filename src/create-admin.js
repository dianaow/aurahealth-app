import { supabaseAdmin } from '$lib/admin-supabase';

async function createAdminUser(email, password) {
  // Sign up the user
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    console.error('Error creating user:', signUpError);
    return;
  }

  // Wait for a short time to ensure the user is fully created before updating metadata
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Update user metadata to set the role as 'admin'
  const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(data.user.id, {
    user_metadata: { role: 'admin' },
  });

  if (updateError) {
    console.error('Error updating user metadata:', updateError);
    return;
  }

  // Fetch the updated user to verify the metadata
  const { data: updatedUser, error: fetchError } = await supabaseAdmin.auth.admin.getUserById(data.user.id);

  if (fetchError) {
    console.error('Error fetching updated user:', fetchError);
    return;
  }

  console.log('Admin user created and metadata updated:', updatedUser);
}

// Call the function to create an admin user
createAdminUser('admin1@test.com', 'securepassword')
  .then(() => console.log('Admin user created successfully'))
  .catch((error) => console.error('Error creating admin user:', error));