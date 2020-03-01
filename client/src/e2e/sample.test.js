describe('Kanban', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    it('should be titled "Kanban Board"', async () => {
        await expect(page.title()).resolves.toMatch('Kanban Board');
    });
});