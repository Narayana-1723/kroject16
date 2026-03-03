import React from 'react'

export default function App() {
  const student = {
    name: 'John Doe',
    registerNumber: 'REG2024001',
    department: 'Computer Science'
  }

  const subjects = [
    { name: 'Data Structures', attendance: 82 },
    { name: 'Web Development', attendance: 65 },
    { name: 'Database Management', attendance: 78 },
    { name: 'Algorithms', attendance: 55 },
    { name: 'Software Engineering', attendance: 91 }
  ]

  const getColor = (attendance) => {
    if (attendance >= 75) return 'bg-green-100 border-green-300'
    if (attendance >= 60) return 'bg-yellow-100 border-yellow-300'
    return 'bg-red-100 border-red-300'
  }

  const getTextColor = (attendance) => {
    if (attendance >= 75) return 'text-green-700'
    if (attendance >= 60) return 'text-yellow-700'
    return 'text-red-700'
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow p-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Attendance Dashboard</h1>
          <div className="flex gap-8">
            <div>
              <p className="text-sm text-gray-600">Student Name</p>
              <p className="font-bold">{student.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Register Number</p>
              <p className="font-bold">{student.registerNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Department</p>
              <p className="font-bold">{student.department}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Subject Attendance</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className={`p-6 rounded border-2 ${getColor(subject.attendance)}`}>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{subject.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-3xl font-bold ${getTextColor(subject.attendance)}`}>
                    {subject.attendance}%
                  </p>
                </div>
                <div>
                  {subject.attendance >= 75 && <p className="text-green-700 font-bold">✓ Good</p>}
                  {subject.attendance >= 60 && subject.attendance < 75 && (
                    <p className="text-yellow-700 font-bold">⚠ Caution</p>
                  )}
                  {subject.attendance < 60 && <p className="text-red-700 font-bold">✗ Low</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
