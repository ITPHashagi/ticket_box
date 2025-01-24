import Seat from "./Seat";
import { useSelector } from "react-redux";

export default function content() {
  const props = useSelector((state) => state.bookingTicketReducer);
  const { listSeats, listSeatsSelected } = props;

  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="space-x-11 text-white">
        <span></span>
        {data.danhSachGhe.map((item) => {
          return <span key={item.soGhe}>{item.soGhe}</span>;
        })}
      </div>
    );
  };

  const renderListSeats = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;
      return (
        <div key={row.hang} className="space-x-6 space-y-6 text-white">
          <span>{row.hang}</span>
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seat) => (total += seat.gia), 0);
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/2 text-center">
          <h1 className="text-yellow-300 font-extrabold text-3xl mt-5 mb-5">
            ĐẶT VÉ XEM PHIM MOVIE.VN
          </h1>
          {renderRowIndex()}
          {renderListSeats()}
        </div>
        <div className="w-1/2 mx-auto">
          <h1 className="text-white text-center font-extrabold text-3xl mt-5 mb-5">
            DANH SÁCH GHẾ BẠN CHỌN
          </h1>
          <table className="table-auto w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-bold text-white">
                  Số Ghế
                </th>
                <th className="border border-gray-300 px-4 py-2 font-bold text-white">
                  Giá
                </th>
              </tr>
            </thead>
            <tbody>
              {listSeatsSelected.map((seat) => (
                <tr key={seat.soGhe}>
                  <td className="border border-gray-300 px-4 py-2 text-yellow-300 font-medium">
                    {seat.soGhe}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-yellow-300 font-medium">
                    {seat.gia} VND
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold text-white">
                  Tổng tiền
                </td>
                <td className="border border-gray-300 px-4 py-2 font-extrabold text-yellow-300">
                  {totalPrice()} VND
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
