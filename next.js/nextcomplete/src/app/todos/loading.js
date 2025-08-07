// export default function Loading() {
//   return (
//     <div className="loading">
//       <div className="spinner">Todos</div>
//       <p>Loading todos...</p>
//     </div>
//   )
// }


export default function Loading() {
  return (
<>
      <h1>Todos</h1>
      <div className="todos-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>
    </>
  )
}