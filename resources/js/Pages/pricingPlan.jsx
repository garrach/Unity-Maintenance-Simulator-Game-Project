const PricingPlan=()=>{
    return(
        <div className="bg-gray-100">
          <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Choose a Plan That Suits You</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-3xl font-bold mb-4">$19.99/month</p>
                <a href="#" className="block text-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Select Plan</a>
              </div>
        
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-3xl font-bold mb-4">$39.99/month</p>
                <a href="#" className="block text-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Select Plan</a>
              </div>
        
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-3xl font-bold mb-4">$59.99/month</p>
                <a href="#" className="block text-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Select Plan</a>
              </div>
            </div>
          </div>
        </div>
        )
}


export default PricingPlan 