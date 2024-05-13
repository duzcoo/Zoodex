// pages/profile.tsx
const Profile = () => {
    // Dummy data for user profile
    const userProfile = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        joinDate: "January 1, 2022",
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">Profile</h1>
            <p><strong>Username:</strong> {userProfile.username}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Join Date:</strong> {userProfile.joinDate}</p>
        </div>
    );
};

export default Profile;
