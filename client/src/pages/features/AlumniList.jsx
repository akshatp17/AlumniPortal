import React, { useState } from 'react';
import { FaSearch, FaCaretDown } from "react-icons/fa";
import AlumniCard from '../../components/AlumniList/AlumniCard';

const AlumniList = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [courseFilter, setCourseFilter] = useState('');
    const [occupationFilter, setOccupationFilter] = useState('');
    const [dropCourse, setDropCourse] = useState(false);
    const [dropProfession, setDropProfession] = useState(false);

    // For search filter
    const handleSearch = () => {
        console.log('Search Filter:', searchFilter);
    };

    // For other filters
    const handleFilter = () => {
        console.log('Year Filter:', yearFilter);
        console.log('Course Filter:', courseFilter);
        console.log('Occupation Filter:', occupationFilter);
    };

    const handleClearFilters = () => {
        setSearchFilter('');
        setYearFilter('');
        setCourseFilter('');
        setOccupationFilter('');
        setDropCourse(false);
        setDropProfession(false);
        console.log('Filters cleared');
    };

    return (
        <div className='w-full h-full flex gap-3'>

            {/* Left Division : Filter */}
            <div className='h-full w-1/5 flex flex-col px-4 py-2'>
                <p className=''>Apply Filters:</p>

                <div className='bg-white w-full px-3 py-2 flex flex-col gap-4 mt-5'>
                    {/* Search by keyword filter */}
                    <div className='w-full flex justify-around items-center'>
                        <input
                            type="text"
                            name="searchFilter"
                            placeholder='Search Alumni Name: '
                            value={searchFilter}
                            className='border border-gray-300 py-1 px-4 rounded-l-full'
                            onChange={(e) => setSearchFilter(e.target.value)}
                        />
                        <button
                            className='bg-[#0b5a99] py-2 px-2 hover:cursor-pointer rounded-r-full'
                            onClick={handleSearch}
                        >
                            <FaSearch color='white' />
                        </button>
                    </div>

                    {/* Filters by categories */}
                    <div className='flex flex-col gap-3'>
                        {/* Year of Passout */}
                        <div>
                            <label className='flex justify-between bg-gray-300 py-2 px-4 border-l-4 border-l-[#0b5a99]'>
                                <p>
                                    Year of Passout
                                </p>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Year"
                                value={yearFilter}
                                className="border border-gray-300 py-1 px-4 w-full mt-1"
                                onChange={(e) => setYearFilter(e.target.value)}
                            />
                        </div>

                        {/* Course Filter */}
                        <div>
                            <label
                                className='flex justify-between items-center bg-gray-300 py-2 px-4 border-l-4 border-l-[#0b5a99] cursor-pointer'
                                onClick={() => setDropCourse(!dropCourse)}
                            >
                                <p>Course</p>
                                <p><FaCaretDown /></p>
                            </label>
                            {dropCourse && (
                                <div className="flex flex-col gap-2 mt-2">
                                    {["BE/BTech", "BCA", "BCom", "BBA"].map((course) => (
                                        <label key={course} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="course"
                                                value={course}
                                                checked={courseFilter === course}
                                                onChange={(e) => setCourseFilter(e.target.value)}
                                            />
                                            {course}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Occupation Filter */}
                        <div>
                            <label
                                className='flex justify-between items-center bg-gray-300 py-2 px-4 border-l-4 border-l-[#0b5a99] cursor-pointer'
                                onClick={() => setDropProfession(!dropProfession)}
                            >
                                <p>Occupation</p>
                                <p><FaCaretDown /></p>
                            </label>
                            {dropProfession && (
                                <div className="flex flex-col gap-2 mt-2">
                                    {[
                                        "Businessman",
                                        "Civil Servant",
                                        "Entrepreneur",
                                        "Government Job",
                                        "Hardware Engineer",
                                        "Software Engineer",
                                        "Others",
                                    ].map((occupation) => (
                                        <label key={occupation} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="occupation"
                                                value={occupation}
                                                checked={occupationFilter === occupation}
                                                onChange={(e) => setOccupationFilter(e.target.value)}
                                            />
                                            {occupation}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {/* Apply Filter Button */}
                        <button
                            className="bg-[#0b5a99] text-white py-2 px-4 rounded-md hover:bg-[#0d4c7f] transition cursor-pointer"
                            onClick={handleFilter}
                        >
                            Apply Filter
                        </button>

                        {/* Clear Filter Button */}
                        <button
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition cursor-pointer"
                            onClick={handleClearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Division : Alumni List */}
            <div className='bg-gray-100 h-full flex flex-col w-4/5 px-8 py-2'>
                <div className='w-full bg-[#0b5a99] text-white px-4 py-2 text-xl'>
                    List of Alumnis in the community:
                </div>

                {/* Alumni Lists: Card Components */}
                <div className='bg-white h-full w-full px-3 py-2 grid grid-cols-5 gap-4'>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </div>
            </div>
        </div>
    );
};

export default AlumniList;