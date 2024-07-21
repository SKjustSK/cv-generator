function CVPage() {
  return <div className="aspect-[1/1.414] bg-white"></div>
}

function CVholder() {
  return (
    <section className="align-center fixed bottom-0 right-0 top-0 flex w-[60%] grow justify-center py-6">
      <CVPage />
    </section>
  )
}

export default CVholder
