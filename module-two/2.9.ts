{
// conditional type
type A1 = number
type B1 = string
type X1 = A1 extends null ? true : false    // condition type
type Y1 = A1 extends null ? true : B1 extends undefined ? undefined : any

type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plan: string;
}
// keyof sheikh 'bike' | 'car' | 'ship'

// car ashe kina / bike ashe kina / tractor ashe kina
type CheckVehicle<T> = T extends keyof Sheikh? true : false

type HasBike = CheckVehicle<'ship'>
type HasTractor = CheckVehicle<'tractor'>

}