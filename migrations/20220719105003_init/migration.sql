/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Plan` DROP FOREIGN KEY `Plan_user_id_fkey`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `issues` (
    `id` INTEGER NOT NULL,
    `node_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `repository_url` VARCHAR(191) NOT NULL,
    `labels_url` VARCHAR(191) NOT NULL,
    `comments_url` VARCHAR(191) NOT NULL,
    `events_url` VARCHAR(191) NOT NULL,
    `html_url` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `state_reason` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NULL,
    `assignee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_on_issues` (
    `issue_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`issue_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `login` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL,
    `node_id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,
    `gravatar_id` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL,
    `html_url` VARCHAR(191) NOT NULL,
    `followers_url` VARCHAR(191) NOT NULL,
    `following_url` VARCHAR(191) NOT NULL,
    `gists_url` VARCHAR(191) NOT NULL,
    `starred_url` VARCHAR(191) NOT NULL,
    `subscriptions_url` VARCHAR(191) NOT NULL,
    `organizations_url` VARCHAR(191) NOT NULL,
    `repos_url` VARCHAR(191) NOT NULL,
    `events_url` VARCHAR(191) NOT NULL,
    `received_events_url` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `site_admin` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `blog` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `hireable` BOOLEAN NULL,
    `bio` VARCHAR(191) NULL,
    `twitter_username` VARCHAR(191) NULL,
    `public_repos` INTEGER NOT NULL,
    `public_gists` INTEGER NOT NULL,
    `followers` INTEGER NOT NULL,
    `following` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `private_gists` INTEGER NOT NULL,
    `total_private_repos` INTEGER NOT NULL,
    `owned_private_repos` INTEGER NOT NULL,
    `disk_usage` INTEGER NOT NULL,
    `collaborators` INTEGER NOT NULL,
    `two_factor_authentication` BOOLEAN NOT NULL,
    `suspended_at` VARCHAR(191) NULL,
    `business_plus` BOOLEAN NOT NULL,
    `ldap_dn` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `labels_on_issues` (
    `issue_id` INTEGER NOT NULL,
    `label_id` INTEGER NOT NULL,

    PRIMARY KEY (`issue_id`, `label_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Label` (
    `id` INTEGER NOT NULL,
    `node_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `color` VARCHAR(191) NOT NULL,
    `default` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignees_on_issues` (
    `issue_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`issue_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `issues` ADD CONSTRAINT `issues_assignee_id_fkey` FOREIGN KEY (`assignee_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_on_issues` ADD CONSTRAINT `users_on_issues_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `issues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_on_issues` ADD CONSTRAINT `users_on_issues_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `labels_on_issues` ADD CONSTRAINT `labels_on_issues_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `issues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `labels_on_issues` ADD CONSTRAINT `labels_on_issues_label_id_fkey` FOREIGN KEY (`label_id`) REFERENCES `Label`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignees_on_issues` ADD CONSTRAINT `assignees_on_issues_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `issues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignees_on_issues` ADD CONSTRAINT `assignees_on_issues_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Plan` ADD CONSTRAINT `Plan_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
