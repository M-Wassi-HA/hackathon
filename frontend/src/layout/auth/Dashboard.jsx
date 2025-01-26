
const Dashboard = () => {
  return (
    <div>
          <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Profile</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold text-green-600">Total Users</h2>
            <p className="mt-2 text-2xl font-semibold">150</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold text-green-600">Active Projects</h2>
            <p className="mt-2 text-2xl font-semibold">35</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold text-green-600">Pending Tasks</h2>
            <p className="mt-2 text-2xl font-semibold">12</p>
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-700">Recent Activities</h2>
          <ul className="mt-4 space-y-2">
            <li className="bg-white p-4 rounded shadow flex justify-between">
              <span>User John Doe added a new project.</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="bg-white p-4 rounded shadow flex justify-between">
              <span>Admin updated user roles.</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
            <li className="bg-white p-4 rounded shadow flex justify-between">
              <span>New user Jane Smith registered.</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Dashboard
