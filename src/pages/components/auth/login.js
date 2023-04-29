
function login() {
    return (

        <div class="flex flex-col h-screen justify-center items-center w-full">
            <div class="w-11/12 sm:w-full md:w-1/2 flex flex-col sm:flex-row justify-between items-center h-3/4 sm:h-1/2">
                {/* Lado izquierdo */}
                <div class="pepe flex flex-col justify-center items-center bg-blue-500 w-full sm:w-1/2 h-full sm:h-auto flex-1 min-h-full ">
                    <h1 class="text-white text-4xl font-bold mb-6">NAME APP</h1>
                    <p class="text-white text-2xl">Welcome</p>
                </div>

                {/* Lado derecho */}
                <div class="flex flex-col justify-center items-center bg-gray-100 w-full sm:w-1/2 h-full sm:h-auto flex-1 min-h-full px-4">
                    <h2 class="text-3xl mb-6">Hello</h2>
                    <form class="flex flex-col items-center w-full">
                        <input type="text" placeholder="Username" class="border-2 border-gray-500 px-4 py-2 mb-4 w-[90%]  md:w-[60%]" />
                        <input type="password" placeholder="Password" class="border-2 border-gray-500 px-4 py-2 mb-4 w-[90%]  md:w-[60%] " />
                        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded  ">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login