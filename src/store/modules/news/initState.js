import SImmutable from 'seamless-immutable'

const InitState = SImmutable({
  list: [],
  count: 0,
  loading: false,
  status: '',
  current: {},
  errmsg: ''
})

export default InitState
