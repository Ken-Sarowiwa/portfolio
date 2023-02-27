import React from "react";
import pic from "../images/food.jpg";
import wandolah from "../images/wandolahs.JPG";
function Sidebar() {
  return (
    <div class="flex flex-col lg:flex-row">
      <aside class="p-3 bg-stone-500 flex flex-col text-center lg:w-1/4">
        <img
          src={pic}
          class="h-40 w-40 rounded-full tracking-wider my-4 self-center"
          alt="A rare picture of kenafrica"
        ></img>
        <h2 class="text-white uppercase space-y-1">WANDOLAH CATERING</h2>
        <ul class="space-y-5">
          <li>
            <a
              href=""
              class="text-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-full"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href=""
              class="text-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-full"
            >
              Orders
            </a>
            <span class="text-green-900 bg-green-100 p-1.5 rounded-full">
              5
            </span>
          </li>
          <li>
            <a
              href=""
              class="text-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-full"
            >
              Invetory
            </a>
          </li>
          <li>
            <a
              href=""
              class="text-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-full"
            >
              Inbox
            </a>
          </li>
          <li>
            <a
              href=""
              class="text-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-full"
            >
              FAQ
            </a>
          </li>
        </ul>
        <span>&#169; Wandolah catering</span>
      </aside>
      <main class="bg-gray-200 lg:w-3/4 lg:p-5">
        <div class="mt-4 flex justify-center items-center lg:justify-end">
          <img src={wandolah} class="w-9 h-9 rounded-full" alt="Wandolahs" />
          <small class="text-gray-500 mx-4">Wandolahs</small>
        </div>
        {/* comment for table  */}
        <div class="px-2 mt-8">
          {/* comment for buttons and text */}
          <div class="flex flex-col items-center lg:flex-row lg: justify-between">
            <h2 class="mb-4 pt-3">All Products</h2>
            <div>
              <button class="text-gray-100 bg-lime-800 rounded-full px-4 hover:bg-lime-500 py-2">
                Add
              </button>
              <select name="bulk" id="bulk" class="ml-2 rounded-full py-2 hover:bg-green-100">
                <option>Bulk Actions</option>
                <option>Edit</option>
                <option>Delete</option>
              </select>
            </div>
          </div>
          <section class="overflow-x-auto flex">
            <table class="min-w-full divide-y divide-gray-200 pt-2">
            <thead class="bg-gray-100 items-center mr-6 pl-7 pt-2">
              <tr class="justify-center">
                <th class='flex px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider items-center'>
                  <input type="checkbox" class="mr-4"></input>ITEM</th>
                <th class='px-6 text-left text-xs text-gray-500 uppercase tracking-wider'>Status</th>
                <th class='px-6 text-left text-xs text-gray-500 uppercase tracking-wider'>Category</th>
                <th class='px-6 text-left text-xs text-gray-500 uppercase tracking-wider'>Stock</th>
                <th class='px-6 text-left text-xs text-gray-500 uppercase tracking-wider'>Price</th>
              </tr>
            </thead>
            </table>
          </section>
        </div>
        <section class="mt-2 flex flex-col items-center py-6 lg:flex-row lg:justify-between">
          <p class="mb-2">Showing 0 0f 100 products</p>
          <ul class="flex mr-4">
            <li class=""> <span>&lt;</span><a href="" class="p-2 rounded-full bg-lime-700 hover:bg-green-700 text-gray-100">1</a></li>
            <li><a href="" class="p-2">5</a></li>
            <li><a href="" class="p-2">10</a></li>
            <li><a href="" class="p-2">15</a></li>
            <li><a href="" class="p-2">20</a><span>&gt;</span></li>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default Sidebar;
