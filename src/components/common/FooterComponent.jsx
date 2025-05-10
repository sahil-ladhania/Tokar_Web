
const FooterComponent = () => {
  return(
    <footer className="bg-slate-800 text-gray-400 text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Tokar. All rights reserved.
      </p>
    </footer>
  )
}
  
export default FooterComponent