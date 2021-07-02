using Microsoft.EntityFrameworkCore.Migrations;

namespace FavoriteMovies.Migrations
{
    public partial class Ooopsie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Movies_MovieId",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "FanOf",
                table: "Likes");

            migrationBuilder.AlterColumn<int>(
                name: "MovieId",
                table: "Likes",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Movies_MovieId",
                table: "Likes",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "MovieId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Movies_MovieId",
                table: "Likes");

            migrationBuilder.AlterColumn<int>(
                name: "MovieId",
                table: "Likes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "FanOf",
                table: "Likes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Movies_MovieId",
                table: "Likes",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "MovieId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
