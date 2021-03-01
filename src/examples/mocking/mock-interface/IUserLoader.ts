export interface IUserLoader {
    loadUsername: () => Promise<string>
    loadAge: () => Promise<number>
}
