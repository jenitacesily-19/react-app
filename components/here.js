const Here = () => {
    return (
        <div className='bg-gray-50 p-6 felx flex-col justify-content-center items-center'>
            <div className='bg-white shadow-lg rounded-2xl p-10 max-w-full'>
                <h1 className='text-3xl font-bold text-orange-600 text-center mb-6'>
                    About Zesty
                </h1>
                <p className='text-gray-700 text-lg leading-relaxed mb-6 text-center'>
                    Zesty is Indias' largest and most convenient
                    online food ordering & delivery platform.
                    with thousands of restaurant to choose from,
                    Zesty delivers food to your doorstep in minutes.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <div className='p-6 bg-orange-50 rounded-xl shadow-sm'>
                    <h2 className='text-xl font-semibold text-orange-500 text-center mb-2'>
                        Our Misson
                    </h2>
                    <p>
                        To deliver food, groceries, and daily essentials form your
                        favorite stores at lighting speed with the best customer
                        experience.
                    </p>
                </div>
                <div className='p-6 bg-orange-50 rounded-xl shadow-sm'>
                    <h2 className='text-xl font-semibold text-orange-500 text-center mb-2'>Our Vision</h2>
                    <p>To be the most trused and customer-first platform
                        for everything food and beyond in India.</p>
                </div>
            </div>
        </div>
    )
}
export default Here;