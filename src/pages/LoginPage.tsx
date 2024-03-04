const LoginPage = () => {
  return (
    <div className='mx-auto w-4/5 mb-8 '>
      <h2 className='text-xl py-4 md:text-3xl'>Login</h2>
      <p className='text-sm'>
        <span className='font-bold'>Why login?</span>
        <br />
        When logged in you can save your shopping cart to next time you're
        visiting our page! How great isn't that? Sadly you won't be able to
        store your cart and retrieve it on other platforms.
      </p>
      <div className='flex flex-col'>{/* <Login /> */}</div>
    </div>
  )
}

export default LoginPage
