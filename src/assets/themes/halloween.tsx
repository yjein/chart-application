const halloween = {
  color: ["#ff715e", "#ffaf51", "#ffee51", "#8c6ac4", "#715c87"],
  backgroundColor: "rgba(64,64,64,0.5)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#ffaf51",
    },
    subtextStyle: {
      color: "#eeeeee",
    },
  },
  line: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "8",
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "8",
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: "0",
      barBorderColor: "#ccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  scatter: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  boxplot: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  parallel: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  sankey: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  funnel: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  gauge: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
  },
  candlestick: {
    itemStyle: {
      color: "#ffee51",
      color0: "#ffffff",
      borderColor: "#ff715e",
      borderColor0: "#797fba",
      borderWidth: "1",
    },
  },
  graph: {
    itemStyle: {
      borderWidth: "0",
      borderColor: "#ccc",
    },
    lineStyle: {
      width: "1",
      color: "#888888",
    },
    symbolSize: "8",
    symbol:
      "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
    smooth: false,
    color: ["#ff715e", "#ffaf51", "#ffee51", "#8c6ac4", "#715c87"],
    label: {
      color: "#333333",
    },
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: "#555555",
        borderColor: "#999999",
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: "rgba(255,175,81,0.5)",
        borderColor: "#ffaf51",
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: "#ffffff",
        },
      },
      emphasis: {
        textStyle: {
          color: "#ffee51",
        },
      },
    },
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: "#555555",
        borderColor: "#999999",
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: "rgba(255,175,81,0.5)",
        borderColor: "#ffaf51",
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: "#ffffff",
        },
      },
      emphasis: {
        textStyle: {
          color: "#ffee51",
        },
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#333333",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#555555"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333333",
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#333333",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#555555"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#999999",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#555555"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#999999",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#555555"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: "#999999",
      },
      emphasis: {
        borderColor: "#666666",
      },
    },
  },
  legend: {
    textStyle: {
      color: "#333333",
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1,
      },
      crossStyle: {
        color: "#cccccc",
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: "#ffaf51",
      width: 1,
    },
    itemStyle: {
      normal: {
        color: "#ffaf51",
        borderWidth: 1,
      },
      emphasis: {
        color: "#ffaf51",
      },
    },
    controlStyle: {
      normal: {
        color: "#ffaf51",
        borderColor: "#ffaf51",
        borderWidth: 0.5,
      },
      emphasis: {
        color: "#ffaf51",
        borderColor: "#ffaf51",
        borderWidth: 0.5,
      },
    },
    checkpointStyle: {
      color: "#ff715e",
      borderColor: "#ff715e",
    },
    label: {
      normal: {
        textStyle: {
          color: "#ff715e",
        },
      },
      emphasis: {
        textStyle: {
          color: "#ff715e",
        },
      },
    },
  },
  visualMap: {
    color: ["#ff715e", "#ffee51", "#797fba"],
  },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(222,222,222,1)",
    fillerColor: "rgba(255,113,94,0.2)",
    handleColor: "#cccccc",
    handleSize: "100%",
    textStyle: {
      color: "#999999",
    },
  },
  markPoint: {
    label: {
      color: "#333333",
    },
    emphasis: {
      label: {
        color: "#333333",
      },
    },
  },
}

export default halloween
