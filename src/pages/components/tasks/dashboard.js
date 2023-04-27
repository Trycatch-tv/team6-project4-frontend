import React from 'react'

function Dashboard() {
  const data = [
    { task: 'Task 1', description: 'Description 1', status: 'done' },
    { task: 'Task 2', description: 'Description 2', status: 'done' },
    { task: 'Task 3', description: 'Description 3', status: 'done' },
    { task: 'Task 4', description: 'Description 4', status: 'done' },
    { task: 'Task 5', description: 'Description 5', status: 'done' },
    { task: 'Task 6', description: 'Description 6', status: 'done' },
  ];
  return (
    <div className='w-[90%] bg-clip-border items-center mx-auto py-9 relative'>
      <div class="flex justify-between items-stretch">
        <div className='basis-1/2 '>
          <h2 className='text-6xl font-bold text-blue-500  self-center m-auto'>NAME APP</h2>
        </div>
        <div className='basis-3/11  self-center '>
          {/* <h1 className='text-4xl w-22 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xlself-center text-end m-auto'>USER</h1> */}
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-2xl text-white bg-blue-500 hover:bg-blue-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center" type="button">User <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t-3 border-blue-400 my-9 w-full" />

      <div className='flex justify-center items-stretch py-11 space-x-0 gap-16'>
        <div>
          <h2 className='text-5xl text-center font-bold text-blue-500'>Project 1</h2>
        </div>
        <div>
          <button className="w-22 text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl self-end">
            New Task
          </button>
        </div>
      </div>


      <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-1">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Task
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Edit
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((card) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {card.task}
                </th>
                <td class="px-6 py-4">
                  {card.description}
                </td>
                <td class="px-6 py-4">
                  <select id="--" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="-">Reserve</option>
                    <option value="-">Starting</option>
                    <option value="-">Review</option>
                    <option value="-">Done</option>
                  </select>
                </td>
                <td class="px-6 py-4 text-right">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </a>
                </td>
                <td class="px-6 py-4 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
