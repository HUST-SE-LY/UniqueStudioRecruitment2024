interface mockReturnType<T> {
  code: 200,
  data: T,
  msg: 'success'
}

function baseMockRequest<T>(returnValue: T) {
  return new Promise<mockReturnType<T>>((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: returnValue,
        msg: 'success',
      })
    },500)
  })
}

export const getUserInfo = baseMockRequest({
  name: '柴犬',
  gender: '男' ,
  rank: 'A',
  group: 'Web',
  college: '软件学院' as const,
  major: '软件工程' as const,
  mail: 'cheems1969@gmail.com',
  introduction: '你好，我是柴犬',
  grade: 1,
})