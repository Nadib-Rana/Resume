import React from 'react'

const Education = () => {
    return (
        <div>
             <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">EDUCATION</h2>
            <div className="border-t-2 ">
                <div className="flex justify-between">
                    <div className='text-left font-semibold text-blue-900'>
                        <li>
                           Green University of Bangladesh <br />
                            <span className="text-sm pl-6 text-gray-600">Bachelor of Science in Computer Science & Engineering (Expected 2025)</span>
                        </li>
                        <li>
                            Guzadia A.H. Secondary School <br />
                            <span className="text-sm pl-6 text-gray-600">Secondary School Certificate (Science)</span>
                        </li>
                    </div>
                    <div className="text-right text-gray-600">
                        <span className="text-sm ">Dhaka Bangladesh</span> <br />
                        <span className="">3.10</span> <br />
                        <span className="text-sm ">Kishoreganj, Bangladesh</span> <br />
                        <span className="">4.18</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Education