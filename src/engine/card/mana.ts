// Constants
export enum ManaColor {
	Black     = 1 << 0,
	Blue      = 1 << 1,
	Green     = 1 << 2,
	Red       = 1 << 3,
	White     = 1 << 4,
	Color     = Black | Blue | Green | Red | White,
	Colorless = 1 << 5,
	Any       = Color | Colorless,
}
