import React from "react";

const Profile = () => {
  return (
    <div>
      <div>
        
      </div>
      <div class="container mt-5">
      <div class="mb-3">
        <h3 className="text-center">Add New Post</h3>
        <label for="formGroupExampleInput" class="form-label">
          Add Post
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Example input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Another label
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Another input placeholder"
        />
      </div>
    </div>
    </div>
  );
};

export default Profile;
