type Unpack<T> = T extends (infer U)[] ? U : T

export default Unpack
