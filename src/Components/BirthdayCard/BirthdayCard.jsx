
const BirthdayCard = (obj) => {
    const student = obj.student
  return (
        <div className="d-block align-items-center text-center text-white p-2">
            <div className="mb-4 mt-3">
                <img width="130px" height="130px" className="border border-5 rounded-circle" src="https://w7.pngwing.com/pngs/241/840/png-transparent-computer-icons-student-school-student-angle-people-logo-thumbnail.png" alt="" />
            </div>
            <div className="text-center">
                <h4>{student.name}</h4>
                <p>{student.class}</p>
                <p><em>“Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!”</em></p>
            </div>
        </div>
  )
}

export default BirthdayCard