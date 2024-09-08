function UserProfile() {
  return (
    <div className="mx-auto my-20 bg-gray-100 rounded-lg shadow-lg md:max-w-xs sm:max-w-sm sm:p-4 md:p-8">
      <img
        className="mx-auto rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="my-4 text-blue-800 sm:text-lg md:text-xl">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
