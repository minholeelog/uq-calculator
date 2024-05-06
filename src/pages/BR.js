import { useState, useEffect } from 'react'

function BR() {
  useEffect(() => {
    handleToday()
  }, [])
  const [backRoom, setBackRoom] = useState('')
  const [salesFloor, setSalesFloor] = useState('')
  const [brRatio, setBrRatio] = useState(0)
  const [sfRatio, setSfRatio] = useState(0)
  const [date, setDate] = useState('')

  const handleBackRoom = (e) => {
    setBackRoom(e.target.value)
  }
  const handleSalesFloor = (e) => {
    setSalesFloor(e.target.value)
  }
  const handleCalculate = (e) => {
    e.preventDefault()
    const total = Number(backRoom) + Number(salesFloor)
    const BRRatio = ((backRoom / total) * 100).toFixed(1)
    const SFRatio = ((salesFloor / total) * 100).toFixed(1)
    if (isNaN(BRRatio || SFRatio)) {
      console.log('다시 입력하세요.')
    } else {
      setBrRatio(BRRatio)
      setSfRatio(SFRatio)
    }
  }
  const handleToday = () => {
    const today = new Date()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + today.getDate()).slice(-2)
    setDate(`${month}월 ${day}일`)
  }
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center mt-8">
      <label
        htmlFor="backroom"
        className="mt-2 block text-sm font-medium leading-6 text-gray-900"
      >
        BR
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id="backroom"
          value={backRoom}
          onChange={handleBackRoom}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <label
        htmlFor="salesfloor"
        className="mt-2 block text-sm font-medium leading-6 text-gray-900"
      >
        매장
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id="salesfloor"
          value={salesFloor}
          onChange={handleSalesFloor}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4"
        onClick={handleCalculate}
      >
        계산하기
      </button>
      <div className="flex flex-col justify-center items-center my-7">
        <div className="flex">{`${date}`}</div>
        <div className="flex">{`매장: ${salesFloor}(${sfRatio}%)`}</div>
        <div className="flex">{`BR: ${backRoom}(${brRatio}%)`}</div>
      </div>
    </div>
  )
}

export default BR
