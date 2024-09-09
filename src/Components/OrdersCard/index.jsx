import { FaChevronRight } from "react-icons/fa6";

const OrdersCard = props => {
    const { totalPrice, totalProducts} = props
    return(
        <div className="flex justify-between items-center mb-3 border-2 border-black rounded-lg p-4 w-80">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>Date: 01.02.23</span>
          <span className='font-light'>Products: {totalProducts}</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <div> <FaChevronRight/></div>
        </p>
      </div>
    </div>
    )
}

export default OrdersCard